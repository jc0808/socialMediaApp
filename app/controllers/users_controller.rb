class UsersController < ApplicationController

    wrap_parameters format: []

    skip_before_action :authorized, only: [:index]

    def index
    render json: User.all, status: :ok
    end

    def show
        render json: User.find(params[:id])
    end

    # def create
    #     adopter = Adopter.create!(adopter_params)
    #     adopter.createCredentials(credential_params)
    #     session[:user_id] = adopter.id
    #     cookies[:user_id] = adopter.id
    #     render json: adopter, status: :created
    
    # end

    # def update
    #     userCredential = Credential.find(reset_password_params[:id])
    #     userCredential.update!(password: reset_password_params[:password])
    # end

    # def destroy
    #     user = Adopter.find(params[:id]).destroy
    #     head :no_content
    # end


end
