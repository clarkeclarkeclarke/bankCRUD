class Api::V1::AccountsController < ApplicationController
  def index
    render json: Account.all
  end

  def create
    account = Account.create(account_params)
    render json: account
  end

  def destroy
    Account.destroy(params[:id])
  end

  def update
    account = Account.find(params[:id])
    account.update_attributes(account_params)
    render json: account
  end

  private

  def account_params
    params.require(:account).permit(:id, :accountnumber, :routingnumber, :bankaddress, :banknickname)
  end
end
