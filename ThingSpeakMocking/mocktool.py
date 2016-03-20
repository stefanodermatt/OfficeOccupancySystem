""" This script simulates people entering and leaving an office at random times
    and posts to ThingSpeak """

import time, requests
from random import randint

write_key = 'IBNBBCAX1Q3Z62UX'
read_key = 'FZ01QQBAH9EROOSX'
post_url = 'https://api.thingspeak.com/update'
get_url = 'https://api.thingspeak.com/channels/61944/feeds/'

def main():

    # get last entry from channel so that we start with the most recent occupancy
    r = requests.get(get_url+'last.json', params={'api_key' : read_key})
    channel_data = r.json()

    # start the occupancy count at the last recorded occupancy on the channel
    office_occupancy = int(channel_data['field1'])
    print office_occupancy

    # start the loop
    trigger_event_random(office_occupancy)


def post_to_thingspeak(office_occupancy):
    payload = {'api_key' : write_key, 'field1' : office_occupancy}
    # issue post request
    try:
        requests.post(post_url, params=payload)
    except:
        print 'oops could not connect to ThingSpeak'

def trigger_event_random(last_occupancy):
    current_occupancy = change_occupancy(last_occupancy)
    print 'posting to ThingSpeak. Office occupancy: ' + str(current_occupancy)
    post_to_thingspeak(current_occupancy)
    random_interval = randint(120,3600)
    print 'next post will be in: ' + str(random_interval) + ' seconds'
    time.sleep(random_interval)
    trigger_event_random(current_occupancy)


# decides by random if the incrementer should increase or decrease by one
# weighted currently to make it more likely someone goes in rather than leaves
def change_occupancy(occupancy):
    rand = randint(0,9)
    if rand > 2:
        occupancy += 1
    elif rand <= 2 and occupancy > 0:
        occupancy -= 1
    return occupancy


if __name__ == '__main__':
    main()