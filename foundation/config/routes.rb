Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/' => "home#index"
  get '/about' => "about#index"
  get '/about/mission' => "about#mission"
  get '/about/board' => "about#board"
  get '/about/event' => "about#event"
  get '/about/program' => "about#program"
  get '/about/officers' => "about#officers"
  get '/mission' => "mission#mission"
  get '/program' => "program#index"
  get '/program/program' => "program#program"
  get '/program/program1' => "program#program1"
  get '/contact' => "contact#index"
end
