class CatsController < ApplicationController
    def index
        cats = Cat.all
        render json: cats
    end
    
    def create
        cat = Cat.create(cat_params) 
        if  cat.valid?
          render json: cat
        else
          render json: cat.errors, status: :unprocessable_entity
        end 
    end
    
    def show
    end 
    
    def update
        @cat = Cat.find(params[:id]) 
        @cat.update_attributes(user_params)
        render :show
    end

    def user_params
        params.require(:cat).permit(:avatar)
    end 
    
    def destroy
        cat = Cat.find params[:id]
        cat.destroy if cat
        render json: cat, status: 200
    end 
    
    def cat_params
        params.require(:cat).permit(:name, :age, :enjoys)
    end
end
