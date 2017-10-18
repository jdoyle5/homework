def sluggish_octopus(fish_arr)
  long_fish = ""

  fish_arr.each_with_index do |fish1, idx|
    long_fish = fish1 if fish1.length > long_fish.length

    fish_arr.drop(idx + 1).each do |fish2|
      long_fish = fish2 if fish2.length > long_fish.length

    end

  end
  long_fish
end

def dominant_octopus(fish)

  return fish if fish.length <= 1

  pivot = fish.length / 2

  left_sorted = dominant_octopus(fish.take(pivot))
  right_sorted = dominant_octopus(fish.drop(pivot))

  octo_merge(left_sorted, right_sorted)

end

def octo_merge(left, right)
  merged = []

  until left.empty? || right.empty?
    (left.first.length <= right.first.length) ? merged << left.shift : merged << right.shift
  end

  merged + left + right

end


def clever_octopus(fishes)
  longest = fishes.first

  fishes.each do |fish|
    longest = fish if fish.length > longest.length
  end

  longest
end



def slow_dance(target, tiles_array)
  tiles_array.each_with_index do |dir, i|
    return tent if dir == target
  end
end


def constant_dance(dir, tiles_arr)
  tiles_arr[dir]
end
