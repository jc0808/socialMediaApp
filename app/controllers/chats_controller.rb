class ChatsController < ApplicationController
    wrap_parameters format: []

    skip_before_action :authorized, only: [ :index]

    def index
        render json: Chat.all, status: :ok
    end

    def show
        chat  = Chat.find_by(id: params[:id]);
        render json: chat, status: :found
    end

    # def create
    #     chat = Chat.find_by(id: params[:id]).id
    #     chat = chat.messages
    # end
end
