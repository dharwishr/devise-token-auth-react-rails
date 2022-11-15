Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'users', controllers: {
    registrations: 'users/registrations'
  }, skip: [:invitations]
  devise_for :users, path: "users", only: [:invitations],
    controllers: { invitations: 'users/invitations' }
end
