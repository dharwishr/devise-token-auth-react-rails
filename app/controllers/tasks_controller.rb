# frozen_string_literal: true

class TasksController < ApplicationController
  before_action :authenticate_user!
  def index
    render json: { "test" => "any name" }
  end
end
