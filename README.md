# ts-starter

Web development using [typescript](https://www.typescriptlang.org/) for static typing, [tslint](https://palantir.github.io/tslint) for linting,
[prettier](https://github.com/prettier/prettier) for formatting, [webpack](http://webpack.github.io/docs/) for module bundling and [webpack-dev-server](https://webpack.github.io/docs/webpack-dev-server.html) as live reloading static http server.

## Usage

1. Install [nodejs](https://nodejs.org/en/). I highly recommend using [nvm](https://github.com/creationix/nvm). If you are on mac or ubuntu, you could use the following command to install nodejs. It's from my [lean-dotfiles](https://gitlab.com/seartipy/lean-dotfiles) configuration.

    On Mac

        curl -L j.mp/srtpldf > setup && bash setup nodefaults web

    On Ubuntu

        wget -qO- j.mp/srtpldf > setup && bash setup nodefaults web

    You could also install and configure Emacs, Atom or Visual studio code by adding option `emacs`, `atom`, `vscode` respectively to above `web` and `nodefaults`. Drop `nodefaults` if you want an awesome prompt in zsh and bash. For examples to install web and visual studio code with an awesome prompt, you could

        curl -L j.mp/srtpldf > setup && bash setup web vscode      # MacOS
        wget -qO- j.mp/srtpldf > setup && bash setup web vscode    # Ubuntu

2. Clone this repository and install npm packages. Make sure you have [git](https://git-scm.com/) installed.

        git clone https://github.com/pervezfunctor/seartipy-typescript-starter.git
        cd seartipy-typescript-starter
        npm install

3. Start server

        npm start

    Now you can edit `src/index.ts` in any editor and see your changes in browser immediately. You could use `npm test` to run tests and `npm lint` for linting all files in `src` folder.

4. Setup your editor

    If you use `atom`, install `atom packages` using the following command

        apm install file-icons platformio-ide-terminal project-manager last-cursor-position atom-beautify linter emmet autoclose-html atom-typescript linter-tslint prettier-atom

    If you use `visual studio code`, install `visual studio code extensions`  using the following command( or use the script in Step 1).

        code --install-extension EditorConfig.EditorConfig
        code --install-extension msjsdiag.debugger-for-chrome
        code --install-extension eg2.tslint
        code --install-extension Orta.vscode-jest
        code --install-extension rettier-vscode

    On Mac, you might have to [install shell command](https://code.visualstudio.com/docs/setup/mac).

## License

MIT
