class MessageSerializer < ActiveModel::Serializer
  attributes :id, :profile_id, :chat_id, :receiver_id, :content
end
