# User Authentication using `devise`

## Prerequisites
* ### Ruby on Rails
* ### PostgreSQL
* ### Yarn
* ### [Mailcatcher](https://mailcatcher.me/) (Intercepts Rails mails)

## Setup and run
```bash
git clone https://github.com/dharwishr/devise-token-auth-react-rails

cd devise-token-auth-react-rails

./bin/setup

bundle exec rails server
```
* ### Go to [http://localhost:3000](http://localhost:3000)
Example User : `david@example.com` or `sam@example.com`, | Password `welcome`
## Using Mailcatcher
```bash
gem install mailcatcher

mailcatcher
```
* ### Go to [http://127.0.0.1:1080](http://127.0.0.1:1080) for getting mails
## Technology used :
* Rails 7.0.1
* `devise` gem -> (Authentication)
* `devise_token_auth` gem -> (Secure authentication using token)
* `devise_invitable` gem -> (Invitation system on top of Devise)
* React.js -> (frontend)
* PostgreSQL -> (Database)
* Material UI -> (UI)
