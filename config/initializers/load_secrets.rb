PizzaTime::Application.configure do
  # Note: Hashie is a gem dependency
  if ENV['RAILS_ENV'] == 'development'
    secrets_file = Rails.root.join('config', 'secrets.yml')

    config.secrets = if File.exist?(secrets_file)
      Hashie::Mash.new(YAML.load_file(secrets_file)[Rails.env.to_s])
    else
      $stderr.puts "We were unable to locate the required API keys. Please enter them in `config/secrets.yml`."
      Hashie::Mash.new
    end

    ENV['meetup_key'] = config.secrets.meetup_key
  end
end
