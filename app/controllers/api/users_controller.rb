class Api::UsersController < ApplicationController
  before_action :set_user, only: [:update, :destroy, :show]

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def update
    if @user.update(user_params)
      render :show
    else
      render json: @user.errors.full_messages, status: 401
    end
  end

  def destroy
    @user.destroy
    render json: Hash.new
  end

  private
  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :password)
  end
end
