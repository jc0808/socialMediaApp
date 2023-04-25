class CreateComments < ActiveRecord::Migration[6.1]
  def change
    create_table :comments do |t|
      t.integer :profile_id
      t.integer :post_id
      t.string :content

      t.timestamps
    end
  end
end
