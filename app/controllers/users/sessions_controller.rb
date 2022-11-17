# frozen_string_literal: true

class Users::SessionsController < DeviseTokenAuth::SessionsController
  prepend DeviseTokenSessionResponseOverride
  skip_after_action :update_auth_header, only: %i[new]

  def new
    if current_user
      render json: { islogin: true, data: current_user.name }
    else
      render json: { islogin: false, message: "Not Logged In" }
    end
  end
end
