const drumKit = {
        sounds: {
          w: 'tom-1.mp3',
          a: 'tom-2.mp3',
          s: 'tom-3.mp3',
          d: 'tom-4.mp3',
          j: 'crash.mp3',
          k: 'kick-bass.mp3',
          l: 'snare.mp3',
        },
      
        init() {
          this.setupEventListeners();
        },
      
        setupEventListeners() {
          document.addEventListener('keydown', (event) => {
            this.handleKeyPress(event.key);
          });
      
          const drumButtons = document.querySelectorAll('.drum');
          drumButtons.forEach((button) => {
            button.addEventListener('click', (event) => {
              this.handleButtonClick(event.target.innerHTML);
            });
          });
        },
      
        handleKeyPress(key) {
          if (this.sounds[key]) {
            this.playSound(this.sounds[key]);
          } else {
            this.logError('Invalid key: ' + key);
          }
        },
      
        handleButtonClick(buttonInnerHTML) {
          if (this.sounds[buttonInnerHTML]) {
            this.playSound(this.sounds[buttonInnerHTML]);
          } else {
            this.logError('Invalid button: ' + buttonInnerHTML);
          }
        },
      
        playSound(soundFile) {
          const audio = new Audio(`sounds/${soundFile}`);
          audio.play();
        },
      
        logError(message) {
          console.error(message);
        },
      };
      
      drumKit.init();
      