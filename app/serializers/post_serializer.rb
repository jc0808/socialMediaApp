class PostSerializer < ActiveModel::Serializer
  attributes :id, :profile_id, :content, :image
end
