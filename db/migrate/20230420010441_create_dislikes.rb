class CreateDislikes < ActiveRecord::Migration[6.1]
  def change
    create_table :dislikes do |t|
      t.integer :profile_id
      t.integer :post_id

      t.timestamps
    end
  end
end
