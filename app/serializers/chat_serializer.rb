class ChatSerializer < ActiveModel::Serializer
  attributes :id, :name, :profile_id

  has_many :messages
  
  
end
