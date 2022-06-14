#!/bin/bash
# get snail!
git clone https://github.com/JaydenDev/snail
chmod +x snail/build_snail.sh
cd snail
snail/build_snail.sh
cd ..
rm -rf snail
