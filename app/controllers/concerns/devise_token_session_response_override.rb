# frozen_string_literal: true

module DeviseTokenSessionResponseOverride
  def render_create_success
    respond_with_success(t("successfully_logged_in", entity: "User"))
  end

  def render_create_error_bad_credentials
    respond_with_error(t("session.incorrect_credentials"), :unauthorized)
  end
end
