# frozen_string_literal: true

Rails.application.routes.draw do
  mount_devise_token_auth_for "User", at: "users", controllers: {
    registrations: "users/registrations",
    sessions: "users/sessions"
  }, skip: [:invitations]

  devise_for :users, path: "users", only: [:invitations],
    controllers: { invitations: "users/invitations" }

  root "home#index"
  get "*path", to: "home#index", via: :all
end
