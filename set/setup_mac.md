# Apps that I should install/DL
- Google Chrome: https://www.google.co.jp/chrome   
- Brave: https://brave.com/download   
- ShiftIt: https://github.com/fikovnik/ShiftIt  
- Karabiner: https://karabiner-elements.pqrs.org/docs/releasenotes  
- VS Code: https://azure.microsoft.com/products/visual-studio-code 
- Docker Desktop: https://www.docker.com/products/docker-desktop  
- Postman: https://www.postman.com/downloads
- Scroll Reverser: https://pilotmoon.com/scrollreverser   
- ExpressVPN: https://www.expressvpn.com/latest/1   
- Dashlane: https://app.dashlane.com/login   
- Grammarly: https://www.grammarly.com/desktop   

- Rossetta
- Homebrew
- NVM
- Nginx
- Ngrok

# Setup local environment

### Enable Rosetta for Terminal on M1 Mac
Reference: https://www.bigbinary.com/learn-rubyonrails-book/setting-up-mac

```shell
/usr/sbin/softwareupdate --install-rosetta --agree-to-license
```
1. Go Applicatoins > Utils
2. Right cilck Termianl
3. Select Open using Rosseta

### Install Homebrew
Reference: https://brew.sh/
```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```
```shell
echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/j.ueno/.zprofile
```
```shell
eval "$(/opt/homebrew/bin/brew shellenv)"
```

### Install NVM
For macOS (Apple silicon)
Reference: https://blog.logrocket.com/how-switch-node-js-versions-nvm/


### Setting up nice terminal with iTerm2
Reference: https://gist.github.com/leymannx/598e0e92722f47cfb31daa7cf9f9a817

Install Oh-my-zsh on iTerm
```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

```shell
brew install zsh-completions
```
```shell
brew install zsh-autosuggestions
```
```shell
chmod -R go-w /opt/homebrew/share
```

```zsh
# ~/.zshrc
if type brew &>/dev/null; then
  FPATH=$(brew --prefix)/share/zsh-completions:$FPATH
  source $(brew --prefix)/share/zsh-autosuggestions/zsh-autosuggestions.zsh
  autoload -Uz compinit && compinit
fi
```
```shell
source ~/.zshrc
```

### Speed Up for Mouse Tracking
Reference: https://paulminors.com/blog/how-to-speed-up-mouse-tracking-on-mac/

- Check the current speed
```shell
defaults read -g com.apple.mouse.scaling
```
- Change the tracking speed
```shell
defaults write -g com.apple.mouse.scaling your_mouse_speed # ex. 5.0
```

### Change Mouse Sensitivity

- Check the current speed
```shell
defaults read -g com.apple.mouse.scaling
```
- Change the tracking speed
```shell
defaults write -g com.apple.mouse.scaling your_mouse_speed # ex. 20.0
```

### Get AltTab
Reference link:
https://alt-tab-macos.netlify.app/

- Run this command below, that it.
```shell
# Your mac must have Homebrew 2.7 and above
brew install --cask alt-tab
```

### Costumize

Agnoster Setting:  
https://github.com/agnoster/agnoster-zsh-theme

Show the limited path instead of full directory:  
https://github.com/agnoster/agnoster-zsh-theme/issues/77

Change user name in terminal:  
https://github.com/agnoster/agnoster-zsh-theme/issues/39