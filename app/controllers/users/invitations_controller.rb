# frozen_string_literal: true

class Users::InvitationsController < Devise::InvitationsController
  include InvitableMethods
  before_action :authenticate_user!, only: :create
  before_action :resource_from_invitation_token, only: [:edit, :update]

  def create
    user = User.where(email: params[:email])
    if user.exists? && user.invitation_not_accepted
      respond_with_error(t("invitation.user_already_invited"))
    elsif user.exists?
      respond_with_error(t("invitation.user_already_exist"))
    else
      User.invite!(invite_params, current_user)
      respond_with_success(t("successfully_invited", entity: "Email"))

    end
  end

  def edit
    redirect_to "/invitations/accept?invitation_token=#{params[:invitation_token]}"
  end

  def update
    @user = User.accept_invitation!(accept_invitation_params)
    if @user.errors.empty?
      render json: { success: ["User updated."] }, status: :accepted
    else
      render json: { errors: @user.errors.full_messages },
        status: :unprocessable_entity
    end
  end

  private

    def invite_params
      params.permit(:name, :email, :invitation_token, :skip_invitation)
    end

    def accept_invitation_params
      params.permit(:password, :password_confirmation, :invitation_token)
    end
end
