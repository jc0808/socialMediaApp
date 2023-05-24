class CreateMessages < ActiveRecord::Migration[6.1]
  def change
    create_table :messages do |t|
      t.integer :profile_id
      t.integer :chat_id
      t.integer :receiver_id
      t.string :content

      t.timestamps
    end
  end
end
