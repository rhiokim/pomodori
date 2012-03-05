build:
	rm -rf ./bin/*	
	echo '#!/usr/bin/env node \n' >> .tmp
	cat ./lib/pomodori.js >> .tmp
	chmod 755 .tmp
	mv .tmp ./bin/pomo
	cp ./bin/pomo ./bin/ppo

.PHONY: build
