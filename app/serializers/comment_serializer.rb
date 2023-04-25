class CommentSerializer < ActiveModel::Serializer
  attributes :id, :profile_id, :post_id, :content
end
