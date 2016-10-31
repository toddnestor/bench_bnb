class AlterBenches < ActiveRecord::Migration[5.0]
  def change
    remove_column :benches, :lng
    remove_column :benches, :lat

    add_column :benches, :lng, :decimal
    add_column :benches, :lat, :decimal
  end
end
