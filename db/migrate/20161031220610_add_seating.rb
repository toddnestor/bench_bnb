class AddSeating < ActiveRecord::Migration[5.0]
  def change
    add_column :benches, :seating, :integer, default: 0
  end
end
