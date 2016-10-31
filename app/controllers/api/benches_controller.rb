class Api::BenchesController < ApplicationController
  before_action :set_bench, only: [:update, :destroy, :show]

  def index
    @benches = Bench.in_bounds(params[:bounds])
  end

  def create
    @bench = Bench.new(bench_params)

    if @bench.save
      render json: @bench
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  def update
    if @bench.update(bench_params)
      render json: @bench
    else
      render json: @bench.errors.full_messages, status: 422
    end
  end

  def destroy
    @bench.destroy
    render json: @bench
  end

  def show
    render json: @bench
  end

  private
  def bench_params
    params.require(:bench).permit(:description, :lat, :lng)
  end

  def set_bench
    @bench = Bench.find(params[:id])
  end
end
