require 'test_helper'

class BenchesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get benches_index_url
    assert_response :success
  end

  test "should get create" do
    get benches_create_url
    assert_response :success
  end

  test "should get show" do
    get benches_show_url
    assert_response :success
  end

  test "should get destroy" do
    get benches_destroy_url
    assert_response :success
  end

  test "should get update" do
    get benches_update_url
    assert_response :success
  end

end
