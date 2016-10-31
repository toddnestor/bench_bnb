class CreateBenches < ActiveRecord::Migration[5.0]
  def change
    create_table :benches do |t|
      t.string :description, null: false, index: true
      t.integer :lat, null: false
      t.integer :lng, null: false

      t.timestamps
    end
  end
end
