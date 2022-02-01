class CreateGameLibraryItems < ActiveRecord::Migration[5.2]
  def change
    create_table :game_library_items do |t|
      t.integer :user_id, null: false
      t.integer :game_id, null: false
      t.integer :hours, default: 0
      t.timestamps
    end
    add_index :game_library_items, [:user_id, :game_id], unique: true
  end
end
