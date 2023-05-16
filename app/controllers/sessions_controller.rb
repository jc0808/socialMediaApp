class SessionsController < ApplicationController

    skip_before_action :authorized, only: :create


    def create
        user = User.find_by(username: params[:username])
        if user&.authenticate(params[:password])
            session[:user_id] = user.profile.id
            cookies[:user_id] = user.profile.id
            render json: user.profile, status: :created
        else 
            render json: {error: {login: "Invalid username or password"}}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
        head :no_content
    end

end
