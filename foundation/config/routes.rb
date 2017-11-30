Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/' => "home#index"
  get '/about' => "about#index"
  get '/about/mission' => "about#mission"
  get '/about/board' => "about#board"
  get '/about/event' => "about#event"
  get '/about/impact' => "about#impact"
  get '/about/officers' => "about#officers"

  get '/contact' => "contact#index"
end
