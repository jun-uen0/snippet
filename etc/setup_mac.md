# Apps that I should install/DL
- Google Chrome   
- Brave   
- nShitlt  
- Karabiner  
- VS Code  
- Docker  

- Rossetta
- Homebrew

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

### Costumize

Agnoster Setting:  
https://github.com/agnoster/agnoster-zsh-theme

Show the limited path instead of full directory:  
https://github.com/agnoster/agnoster-zsh-theme/issues/77

Change user name in terminal:  
https://github.com/agnoster/agnoster-zsh-theme/issues/39