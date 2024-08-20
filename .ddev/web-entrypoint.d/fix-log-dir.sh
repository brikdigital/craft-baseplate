#!/bin/bash

# A workaround to make mounted `/var/log` volume writable for supervisord.
sudo chmod 777 /var/log
