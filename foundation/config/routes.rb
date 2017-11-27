Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/' => "home#index"
  get '/about' => "about#index"
  get '/about/:about' => "about#mission"
  get '/about/:about' => "about#board"
  get '/about/:about' => "about#partners"
  get '/about/:about' => "about#impact"
  get '/about/:about' => "about#staff"

  get '/contact' => "contact#index"
end
