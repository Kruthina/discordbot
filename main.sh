#!/bin/bash

# to check every 15 minutes for a new version in git

MAILFILE=~/SKYNET/mail.log
git pull &>.pull
stop_process() {
    process_id=$(ps -ef | grep "src/main.js" | cut -b 12-16 | head -n 1)
    kill -9 $process_id
}

run_again() {
    cd ~/SKYNET
    rm nohup.out
    nohup /home/ubuntu/.nvm/versions/node/v14.13.0/bin/node src/main.js &
}

send_mail() {
    cat ~/SKYNET/.pull >>$MAILFILE
    cat $MAILFILE | /usr/sbin/ssmtp pka.pranayandra02@gmail.com
}
c1=$(cat .pull | grep "up to date" | wc -l)
c2=$(cat .pull | grep "insertion" | wc -l)
c3=$(cat .pull | grep "Aborting" | wc -l)
if [ "$c1" -gt 0 ]; then
    echo "already upto date"
    exit
elif [ "$c2" -gt 0 ]; then
    echo "updating"
    stop_process
    run_again
    echo -e "Subject: Rerun SKYNET @ $(date)\nTo: pka.pranayandra02@gmail.com " >$MAILFILE
    send_mail
elif [ "$c3" -gt 0 ]; then
    echo "error"
    echo -e "Subject: Theres a pulling error for SKYNET @ $(date)\nTo: pka.pranayandra02@gmail.com " >$MAILFILE
    send_mail
fi
