class UsersController < ApplicationController

    wrap_parameters format: []

    skip_before_action :authorized, only: [:index]

    # def index
    # render json: User.all, status: :ok
    # end

    def show
        render json: User.find(params[:id])
    end

    def create
        newUser = User.create!(user_params)
        newUser.createProfile(profile_params)

        session[:user_id] = newUser.id
        cookies[:user_id] = newUser.id
        render json: newUser.profile.id, status: :created
    end


    def update 
        user = User.find(params[:id])
        user.update!(reset_password_params)
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


    private

    def user_params
        params.permit(:username, :password)
    end

    def profile_params
        params[:profile].permit(:firstName, :lastName, :location, :image)
    end

    def reset_password_params
        params.permit(:password)
    end


end
