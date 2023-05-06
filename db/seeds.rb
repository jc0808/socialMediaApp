# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user1 = User.create(username: "joshua123", password_digest: "josh123")
user2 = User.create(username: "lucas123", password_digest: "lucas123")
user3 = User.create(username: "shafeska123", password_digest: "shafes123")


p1 = Profile.create(firstName: "Joshua", lastName: "Campos", user_id: user1.id, location: "USA")
p2 = Profile.create(firstName: "Lucas", lastName: "Campos", user_id: user2.id, location: "USA")
p3 = Profile.create(firstName: "Shafeska", lastName: "Callimore", user_id: user3.id, location: "CR")


Post.create(profile_id: p1.id, content: "How's everyone day going?", image:nil )
Post.create(profile_id: p2.id, content: "Went on a walk today", image:nil )
Post.create(profile_id: p3.id, content: "Went to Amsterdan last week", image:nil )

Like.create(profile_id: p2.id, post_id: 1)
Like.create(profile_id: p3.id, post_id: 1)
Like.create(profile_id: p1.id, post_id: 2)
Like.create(profile_id: p1.id, post_id: 3)
Like.create(profile_id: p3.id, post_id: 2)
Like.create(profile_id: p2.id, post_id: 3)

Follower.create(following_id: p2.id, profile_id: p1.id)
Follower.create(following_id: p3.id, profile_id: p1.id)
Follower.create(following_id: p1.id, profile_id: p2.id)
Follower.create(following_id: p1.id, profile_id: p3.id)
Follower.create(following_id: p3.id, profile_id: p2.id)

Comment.create(profile_id: p2.id, post_id: 1, content: "My was great Joshua!")
Comment.create(profile_id: p3.id, post_id: 1, content: "It was awesome!")
Comment.create(profile_id: p1.id, post_id: 2, content: "Nice, hope you enjoyed it!")
Comment.create(profile_id: p1.id, post_id: 3, content: "how was it?")


