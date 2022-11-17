# frozen_string_literal: true

module DeviseTokenRegistrationResponseOverride
  def render_create_success
    respond_with_success(t("successfully_created", entity: "User"))
  end

  def render_create_error
    respond_with_error(t("something_went_wrong"))
  end
end
