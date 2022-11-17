# frozen_string_literal: true

class Users::RegistrationsController < DeviseTokenAuth::RegistrationsController
  prepend DeviseTokenRegistrationResponseOverride

  private

    def sign_up_params
      params.permit(:email, :password, :password_confirmation, :name)
    end
end
