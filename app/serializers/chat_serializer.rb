class ChatSerializer < ActiveModel::Serializer
  attributes :id, :name, :profile_id, :profile_two_id

  has_many :messages
  
  
end
