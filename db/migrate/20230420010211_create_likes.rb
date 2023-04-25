class CreateLikes < ActiveRecord::Migration[6.1]
  def change
    create_table :likes do |t|
      t.integer :profile_id
      t.integer :post_id

      t.timestamps
    end
  end
end
