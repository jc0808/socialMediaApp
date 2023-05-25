class ChatsController < ApplicationController
    wrap_parameters format: []

    skip_before_action :authorized, only: [ :index]

    def index
        render json: Chat.all, status: :ok
    end

    def show
        chat  = Profile.find_by(id: params[:id]).chats;
        render json: chat, status: :found
    end

    def create
        chat = Chat.create!(chat_params)
        render json: chat, status: :created
    end

    private

    def chat_params
        params.permit(:name, :profile_id, :profile_two_id)
    end
end
