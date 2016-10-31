class Bench < ApplicationRecord
  validates :description, :lat, :lng, presence: true

  def self.in_bounds(bounds)
    lat_range = (bounds[:southWest][:lat].to_f..bounds[:northEast][:lat].to_f)
    lng_range = (bounds[:southWest][:lng].to_f..bounds[:northEast][:lng].to_f)
    Bench.where(lat: lat_range).where(lng: lng_range).all
  end
end
