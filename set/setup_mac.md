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
- Rossetta: https://support.apple.com/en-us/HT211861
- Homebrew: https://brew.sh/
- NVM: https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/
- Nginx: https://www.nginx.com/
- Ngrok: https://ngrok.com/

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
**For macOS (Apple silicon)**<br>
Reference: https://blog.logrocket.com/how-switch-node-js-versions-nvm/<br>
**For macOS (Intel Chip)**<br>
Reference: https://www.freecodecamp.org/news/node-version-manager-nvm-install-guide/
<br>

### Setting up nice terminal with iTerm2
- Download iTerm2
https://gist.github.com/leymannx/598e0e92722f47cfb31daa7cf9f9a817

Install Fish
```shell
brew install fish
```

Install oh-my-zsh
```shell
curl -L https://github.com/oh-my-fish/oh-my-fish/raw/master/bin/install | fish
```

Install oh-my-fish agnoster package
```shell
omf install agnoster
```

Install Powerline fonts
```shell
git clone https://github.com/powerline/fonts.git --depth=1
cd fonts
./install.sh
cd ..
rm -rf fonts
```

Install zsh-completions 
```shell
brew install zsh-completions
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

### Setup AWS CLI
Reference: https://docs.aws.amazon.com/cli/latest/userguide/installing.html
1. Download the latest version of the AWS CLI from the AWS website.
2. Extract the archive into a folder in your home directory.
3. Open a new terminal window.
4. Run the following command:
```shell
brew install awscli
```
5. Run the following command:
```shell
aws --version
```
6. Run the following command:
```shell
aws configure
```
7. And then, you can use the AWS CLI.
8. Install AWSP (Ref:https://github.com/johnnyopao/awsp#setup)
```shell
npm install -g awsp
```


### Costumize

Agnoster Setting:  
https://github.com/agnoster/agnoster-zsh-theme

Show the limited path instead of full directory:  
https://github.com/agnoster/agnoster-zsh-theme/issues/77

Change user name in terminal:  
https://github.com/agnoster/agnoster-zsh-theme/issues/39
