class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :render_invalid_record

  before_action :authorized

  def authorized
    return render json: {error: "Not Authorized"}, status: :unauthorized unless session.include? :user_id
  end



  private

  def render_not_found(exception)
    render json: {error: "#{exception.model} not found"}, status: :not_found
  end

  def render_invalid_record(exception)
    render json: {errors: exception.record.errors.full_messages}, status: :unprocessable_entity
  end


end
