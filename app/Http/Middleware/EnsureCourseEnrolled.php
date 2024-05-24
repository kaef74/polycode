<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class EnsureCourseEnrolled
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function handle(Request $request, Closure $next)
    {
        $courseId = $request->route('id');
        $user = $request->user();

        if (!$user->courses->contains($courseId)) {
            return redirect()->route('home')->with('error', 'Вы не подписаны на этот курс.');
        }

        return $next($request);
    }
}
