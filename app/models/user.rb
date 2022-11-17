# frozen_string_literal: true

class User < ActiveRecord::Base
  devise :invitable, :database_authenticatable, :registerable,
    :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User
end
