class MessagesController < ApplicationController

    wrap_parameters format: []

    def create
        message = Message.create!(message_params)
        render json: message, status: :created
    end


    private
    
    def message_params
        params.permit(:profile_id, :chat_id, :receiver_id, :content)
    end
end
